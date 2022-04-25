import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const ResultAlert = ({ ms, value, originalVal }) => {
  const getSuffix = (num) => {
    // 1st, 2nd, 3rd, 4th, etc.
    const j = num % 10;
    const k = num % 100;
    switch (true) {
      case j === 1 && k !== 11:
        return num + 'st';
      case j === 2 && k !== 12:
        return num + 'nd';
      case j === 3 && k !== 13:
        return num + 'rd';
      default:
        return num + 'th';
    }
  };
  return (
    <div className="my-2 w-2/3 bg-pink-400 p-2 opacity-80">
      <div>
        <span>
          Time: <span className="font-bold">{ms} ms</span>
        </span>
      </div>
      <div>
        <span>
          <span className="font-bold">{getSuffix(originalVal)}</span> fibonacci
          number: <span className="font-bold">{value}</span>
        </span>
      </div>
    </div>
  );
};

const Input = ({ invalid, register, name }) => {
  return (
    <input
      {...register(name)}
      type="text"
      className={`rounded-sm border border-gray-300 px-2 py-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
        invalid ? 'border-red-500 bg-orange-200' : ''
      }`}
    />
  );
};

const schema = yup
  .object({
    inputValue: yup
      .number()
      .typeError('must be a number')
      .positive('must be a positive number')
      .integer('must be an integer number')
      .required('is required'),
  })
  .required();

function Fibonacci() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [result, setResult] = React.useState([]);

  const fibonacciCal = (n) =>
    n < 3 ? 1 : fibonacciCal(n - 1) + fibonacciCal(n - 2);

  const submitHandler = (data) => {
    const startTime = new Date().getTime();
    const value = fibonacciCal(+data?.inputValue);
    const ms = new Date().getTime() - startTime;
    setResult([
      ...result,
      {
        originalVal: data?.inputValue,
        value,
        ms,
      },
    ]);
  };

  const renderResult = React.useMemo(() => {
    const _dataReturned = [];
    for (let i = 0; i < result.length; i++) {
      _dataReturned.push(
        <ResultAlert
          value={result[i]?.value}
          ms={result[i]?.ms}
          originalVal={result[i]?.originalVal}
          key={i}
        />
      );
    }
    return _dataReturned;
  }, [result]);

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="m-3">
        <div className="text-sm text-red-500">
          {errors?.inputValue?.message}
        </div>
        <div className="my-2">
          <Input
            name="inputValue"
            register={register}
            invalid={errors?.inputValue?.message}
          />
          <button
            type="submit"
            className="active:bg-blue-  ml-3 rounded-sm bg-blue-500 px-2 py-1 text-white"
          >
            Calculate
          </button>
        </div>
        <div>{renderResult}</div>
      </div>
    </form>
  );
}

export default Fibonacci;
