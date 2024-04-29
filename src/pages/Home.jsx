import React from 'react';
import Toy from '../widget/Toy';
import Case from '../widget/Case';

// Page Home menampung beberapa widget
export default function Home() {
  return (
    <div className="container my-auto mx-auto mb-4">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="lg:col-span-4 md:col-span-2 sm:col-span-1">
            <div className="bg-white p-4 mt-4">
              <Toy />
              <hr className="w-full border-2 border-gray-100 mb-6" />
              <Case />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
