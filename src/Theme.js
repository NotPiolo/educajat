const Features = React.lazy(() => import('./pages/Features'));
// ...
<React.Suspense fallback={<LoadingSpinner />}>
  <Routes>...</Routes>
</React.Suspense>