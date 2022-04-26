import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { getSuffix } from 'src/helpers/helpers.js';

const ResultAlert = ({ ms, value, nth, loading }) => {
  return (
    <div className="my-2 w-2/3 bg-pink-400 p-2 opacity-80">
      {loading ? (
        <div>Calculating the {nth} number...</div>
      ) : (
        <React.Fragment>
          <div>
            <span>
              Time: <span className="font-bold">{ms} ms</span>
            </span>
          </div>
          <div>
            <span>
              <span className="font-bold">{nth}</span> fibonacci number:
              <span className="font-bold">{value}</span>
            </span>
          </div>
        </React.Fragment>
      )}
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

const reducer = (
  state = {
    computedFibs: [],
  },
  action
) => {
  switch (action.type) {
    case 'SET_FIBO': {
      const { id, nth, loading } = action;
      return {
        ...state,
        computedFibs: [...state.computedFibs, { id, nth, loading }],
      };
    }
    case 'UPDATE_FIBO': {
      const { id, time, fibNum } = action;
      const curr = state.computedFibs.find((f) => f.id === id);
      curr.loading = false;
      curr.time = time;
      curr.fibNum = fibNum;
      return {
        ...state,
        computedFibs: [...state.computedFibs],
      };
    }
    default:
      return state;
  }
};

function Fibonacci() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [info, dispatch] = React.useReducer(reducer, { computedFibs: [] });

  const runWorker = (num, id) => {
    const worker = new Worker(
      new URL('src/workers/fibonacci.worker.js', import.meta.url)
    );
    worker.postMessage({ num });
    worker.onerror = (err) => err;
    worker.onmessage = (e) => {
      const { time, fibNum } = e.data;
      dispatch({
        type: 'UPDATE_FIBO',
        id,
        time,
        fibNum,
      });
      worker.terminate();
    };
  };

  const submitHandler = (data) => {
    dispatch({
      type: 'SET_FIBO',
      id: info.computedFibs.length,
      loading: true,
      nth: getSuffix(data?.inputValue),
    });
    runWorker(+data?.inputValue, info.computedFibs.length);
  };

  const renderResult = React.useMemo(() => {
    const _dataReturned = [];
    for (let i = 0; i < info.computedFibs.length; i++) {
      const curr = info.computedFibs[i];
      _dataReturned.push(
        <ResultAlert
          value={curr?.fibNum}
          ms={curr?.time}
          loading={curr?.loading}
          nth={curr?.nth}
          key={i}
        />
      );
    }
    return _dataReturned;
  }, [info.computedFibs]);

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
