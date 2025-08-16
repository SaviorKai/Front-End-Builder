import React from 'react';
import { Button } from './components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/ui/Card';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to Your New App</CardTitle>
          <CardDescription>
            This project is now set up with a ShadCN/ui-inspired component
            system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            You can start building your UI by creating and composing components
            from the <code className="bg-muted text-muted-foreground px-1 py-0.5 rounded-sm">components/ui</code> directory.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Get Started</Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default App;
