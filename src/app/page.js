import QueryClientProviderWrapper from '@/api/QueryClientProviderWrapper';
import { Main } from '@components/Main';

export default function Home() {
  return (
    <QueryClientProviderWrapper>
      <Main />
    </QueryClientProviderWrapper>
  );
}
