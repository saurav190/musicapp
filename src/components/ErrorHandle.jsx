import React, { useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { MyContext } from "../provider/ContextProvider";

const ErrorHandle = () => {
  const { isToggleOff, loading } = useContext(MyContext);

  return (
    <>
      <section
        className={isToggleOff ? "bg-zinc-800 text-white " : "bg-white "}
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-1">
            <div className="container p-0 my-10">
              <div
                className={
                  isToggleOff
                    ? "text-white text-start font-semibold text-3xl mb-5"
                    : "text-start font-semibold text-3xl text-slate-600 mb-5"
                }
              >
                Details
              </div>

              {loading ? (
                <>
                  <div className="flex items-center justify-center my-20">
                    <ClipLoader
                      color={"#36d7b7"}
                      loading={loading}
                      size={50}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  </div>
                </>
              ) : (
                <div
                  className={
                    isToggleOff
                      ? "text-white text-center font-semibold text-2xl mb-5"
                      : "text-center font-semibold text-2xl text-slate-600 mb-5"
                  }
                >
                  Loading...
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorHandle;
