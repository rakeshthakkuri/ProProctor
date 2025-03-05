import { useState, useEffect } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Table, TableHead, TableRow, TableHeader, TableCell, TableBody } from '@/components/ui/table';
// import { Badge } from '@/components/ui/badge';
// import { motion } from 'framer-motion';
import StudentDashboard from './Components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <StudentDashboard />
    </div>
  );
}

export default App;
