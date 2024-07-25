import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const handleButtonClick = () => {
    alert("Welcome to our bare-bones app!");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Logo</div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle>Welcome to Our Bare-Bones App</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">This is a minimal web application structure that you can easily modify and build upon.</p>
            <Button onClick={handleButtonClick}>Click me!</Button>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-4 text-center text-gray-600">
          © 2024 Bare-Bones App. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;