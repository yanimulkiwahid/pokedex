import Detail from '@/containers/detail';

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `${params?.id.toUpperCase()} | Pokémon`,
    description: 'Catch Them All! Collect Strongest and Rarest Pokémon',
  };
}

export default Detail;
