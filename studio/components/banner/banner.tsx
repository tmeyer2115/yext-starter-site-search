import { BannerProps } from "../../props/components/banner/banner-props";

export function Banner(props: BannerProps) {
  const className = `w-fill p-3 flex flex-col items-center bg-lime-300`;
  return (
    <div className={className}>
      <h1 className='text-3xl p-1'>
        {props.title || 'Default Title'}
      </h1>
    </div>
  );
}

export function BannerModule(props) {
  return (
    <Banner {...props}/>
  );
}