import { ThreeDots } from "react-loader-spinner";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#15883e"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      visible={true}
    />
  );
}
