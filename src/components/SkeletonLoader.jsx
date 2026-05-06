const SkeletonLoader = () => {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="card p-5 border-navy-700">
          <div className="flex justify-between items-start mb-4">
            <div className="w-2/3">
              <div className="h-6 w-1/2 skeleton mb-3"></div>
              <div className="h-4 w-full skeleton mb-2"></div>
              <div className="h-4 w-4/5 skeleton mb-4"></div>
              <div className="flex gap-2">
                <div className="h-6 w-20 skeleton rounded-full"></div>
                <div className="h-6 w-24 skeleton rounded-full"></div>
                <div className="h-6 w-16 skeleton rounded-full"></div>
              </div>
            </div>
            <div className="h-8 w-24 skeleton rounded"></div>
          </div>
          
          <div className="pt-4 border-t border-navy-700">
            <div className="flex gap-3 mb-4">
              <div className="h-8 w-32 skeleton rounded"></div>
              <div className="h-8 w-28 skeleton rounded"></div>
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-12 skeleton rounded-lg shrink-0"></div>
              <div className="w-full">
                <div className="h-4 w-full skeleton mb-2"></div>
                <div className="h-4 w-2/3 skeleton mb-4"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-16 w-full skeleton rounded-lg"></div>
                  <div className="h-16 w-full skeleton rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
