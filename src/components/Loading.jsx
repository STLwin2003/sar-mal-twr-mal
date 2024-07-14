import { RotatingLines } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="position-absolute top-50">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeColor="#B46C14"
          strokeWidth="3"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <p className="fs-5">Please Wait</p>
      </div>
    </div>
  );
}
