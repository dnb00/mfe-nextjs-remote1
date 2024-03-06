import { Card, Container } from './Card.styles';
import { Props } from './Card.types';

export default function CardComponent({ children, onClick }: Readonly<Props>) {
  return (
    <Container>
      <Card onClick={onClick}>{children}</Card>
    </Container>
  );
}
