import DotsLoader from '@/shared/ui/DotsLoader.tsx';

const Loading = ({ loading = false }: {loading: boolean}) => {
  if (loading) {
    return (
      <div role="status" className="animate-pulse absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 flex flex-col items-center gap-6">
        <h1 className="font-bold text-5xl text-sky-600">BirQadam</h1>
        <DotsLoader color="bg-sky-600"/>
      </div>
    )
  }
};

export default Loading;
