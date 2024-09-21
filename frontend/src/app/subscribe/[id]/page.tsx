
interface PageProps {
  params: {
    id: string;
  };
}

async function get(params:type) {
  
}

const SubscribePage: React.FC<PageProps> = ({ params }) => {
  return (
    <div>
      {params.id}
    </div>
  );
};

export default SubscribePage;