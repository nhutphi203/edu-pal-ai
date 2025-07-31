import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Dashboard } from '@/components/Dashboard';
import { ChatBot } from '@/components/ChatBot';

const Index = () => {
  const [userRole, setUserRole] = useState<'student' | 'teacher' | 'admin'>('student');
  const [userName] = useState('Nguyễn Văn A');

  const handleRoleChange = (newRole: 'student' | 'teacher' | 'admin') => {
    setUserRole(newRole);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        userRole={userRole} 
        userName={userName} 
        onRoleChange={handleRoleChange} 
      />
      
      <main className="pb-20">
        <Dashboard userRole={userRole} userName={userName} />
      </main>

      <ChatBot userRole={userRole} />
    </div>
  );
};

export default Index;
