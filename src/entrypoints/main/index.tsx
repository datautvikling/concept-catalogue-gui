import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '@fellesdatakatalog/theme';

import { App } from '../../app/App';
import { ErrorBoundary } from '../../components/error-boundary/error-boundary';
import { authService } from '../../services/auth-service';
import { initAbilities } from '../../casl/ability';

const render = () =>
  ReactDOM.render(
    <ThemeProvider useGlobalStyles={false}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ThemeProvider>,
    document.getElementById('root')
  );

async function main() {
  const authenticated = await authService.init({ loginRequired: true });
  if (authenticated) {
    initAbilities();
    render();
  }
}

main().catch(console.error);

if ((module as any).hot) {
  (module as any).hot.accept();
}
