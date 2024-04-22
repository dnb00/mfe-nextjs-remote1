import CardComponent from '@/components/Card/Card';
import { useRouter } from 'next/router';

export default function BlogPage({ people }: { people: any }) {
  const router = useRouter();

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
       <h1>Pokemon characters </h1>
        {people.results.map((person: any, index: number) => (
          <CardComponent
            key={person.name}
            onClick={() => router.push(`./blog/${index + 1}`)}
          >
            <h2> Name: {person.name}</h2>
          </CardComponent>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon');
  const people = await res.json();
  return { props: { people } };
};
