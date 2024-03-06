import { NextPageContext } from 'next';
import CardComponent from '@/components/Card/Card';
import { Container } from '@/components/Card/Card.styles';
import { useRouter } from 'next/router';

export default function BlogPagePerson({ person }: { person: any }) {
  const router = useRouter();
  console.log('person', person);
  return (
    <Container>
      <CardComponent>
        <h1>personId: {router.query.personId} </h1>
        <h2>Name: {person.name}</h2>
      </CardComponent>
    </Container>
  );
}

BlogPagePerson.getInitialProps = async () => {
  return { person: {} };
};

export const getServerSideProps = async (context: NextPageContext) => {
  const res = await fetch(
    `https://swapi.dev/api/people/${context.query.personId}`,
    { cache: 'no-store' }
  );
  const person = await res.json();
  return { props: { person } };
};
