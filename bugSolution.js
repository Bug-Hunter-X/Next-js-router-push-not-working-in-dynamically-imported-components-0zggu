```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  
  const handleClick = () => {
    // Check if the router is ready before navigation
    if (router.isReady) {
      router.push('/'); // Navigate to home page
    }
  };
  
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go back Home</button>
    </div>
  );
}
```