import clsx from 'clsx';
import style from '~/styles/loader.module.css';

export default function Loading() {
  return (
    <div className='fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-white'>
      <div className={style.loader}>
        <div className={clsx(style.box, style.box0)}>
          <div></div>
        </div>
        <div className={clsx(style.box, style.box1)}>
          <div></div>
        </div>
        <div className={clsx(style.box, style.box2)}>
          <div></div>
        </div>
        <div className={clsx(style.box, style.box3)}>
          <div></div>
        </div>
        <div className={clsx(style.box, style.box4)}>
          <div></div>
        </div>
        <div className={clsx(style.box, style.box5)}>
          <div></div>
        </div>
        <div className={clsx(style.box, style.box6)}>
          <div></div>
        </div>
        <div className={clsx(style.box, style.box7)}>
          <div></div>
        </div>
        <div className={style.ground}>
          <div></div>
        </div>
      </div>
    </div>
  );
}
