
interface PageProps {
  params: {
    id: string;
  };
}

const SubscribePage: React.FC<PageProps> = ({ params }) => {
  return (
    <div>
      {params.id}
    </div>
  );
};

export default SubscribePage;