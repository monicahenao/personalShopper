export const CursorPointer = () => {
  return (
    <>
      {/* <!-- Progress scroll totop --> */}
      <div className="progress-wrap cursor-pointer">
        <svg
          className="progress-circle svg-content"
          width={100}
          height={100}
          viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </>
  );
};
