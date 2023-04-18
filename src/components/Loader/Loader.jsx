import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      height="100"
      width="100"
      radius="10"
      color="#131413"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};
export default Loader;

//  <div
//    style={{
//      display: 'block',
//      justifyContent: 'center',
//      alignItems: 'center',
//      marginLeft: 'auto',
//      marginRight: 'auto',
//    }}
//  >
//    <ProgressBar
//      height="350"
//      width="350"
//      ariaLabel="progress-bar-loading"
//      wrapperStyle={{}}
//      wrapperClass="progress-bar-wrapper"
//      borderColor="#2a2a2a"
//      barColor="#51E5FF"
//    />
//  </div>;

