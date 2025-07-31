import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Users, 
  Settings, 
  Bell, 
  Search,
  GraduationCap,
  Brain,
  Menu,
  X
} from 'lucide-react';

interface NavigationProps {
  userRole: 'student' | 'teacher' | 'admin';
  userName: string;
  onRoleChange: (role: 'student' | 'teacher' | 'admin') => void;
}

export const Navigation = ({ userRole, userName, onRoleChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const roleConfig = {
    student: {
      title: 'Học viên',
      icon: <GraduationCap className="w-5 h-5" />,
      color: 'bg-gradient-primary',
      menuItems: [
        { label: 'Khóa học của tôi', icon: <BookOpen className="w-4 h-4" /> },
        { label: 'Lộ trình học tập', icon: <Brain className="w-4 h-4" /> },
        { label: 'Bài tập', icon: <Users className="w-4 h-4" /> },
        { label: 'Thành tích', icon: <Settings className="w-4 h-4" /> },
      ]
    },
    teacher: {
      title: 'Giáo viên',
      icon: <Users className="w-5 h-5" />,
      color: 'bg-gradient-secondary',
      menuItems: [
        { label: 'Quản lý khóa học', icon: <BookOpen className="w-4 h-4" /> },
        { label: 'Học viên', icon: <Users className="w-4 h-4" /> },
        { label: 'Bài kiểm tra', icon: <Brain className="w-4 h-4" /> },
        { label: 'Thống kê', icon: <Settings className="w-4 h-4" /> },
      ]
    },
    admin: {
      title: 'Quản trị viên',
      icon: <Settings className="w-5 h-5" />,
      color: 'bg-accent',
      menuItems: [
        { label: 'Người dùng', icon: <Users className="w-4 h-4" /> },
        { label: 'Hệ thống', icon: <Settings className="w-4 h-4" /> },
        { label: 'Báo cáo', icon: <Brain className="w-4 h-4" /> },
        { label: 'Cấu hình', icon: <BookOpen className="w-4 h-4" /> },
      ]
    }
  };

  const currentRole = roleConfig[userRole];

  return (
    <nav className="bg-card shadow-card border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo và Brand */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                EduPal AI
              </span>
            </div>
            
            {/* Role Switcher - Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <Badge variant="secondary" className={`${currentRole.color} text-white shadow-soft`}>
                {currentRole.icon}
                <span className="ml-1">{currentRole.title}</span>
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  const roles: ('student' | 'teacher' | 'admin')[] = ['student', 'teacher', 'admin'];
                  const currentIndex = roles.indexOf(userRole);
                  const nextRole = roles[(currentIndex + 1) % roles.length];
                  onRoleChange(nextRole);
                }}
                className="text-xs"
              >
                Đổi vai trò
              </Button>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {currentRole.menuItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="flex items-center space-x-2 hover:bg-muted transition-smooth"
              >
                {item.icon}
                <span>{item.label}</span>
              </Button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search - Desktop */}
            <div className="hidden md:flex items-center">
              <Button variant="ghost" size="icon">
                <Search className="w-5 h-5" />
              </Button>
            </div>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground w-5 h-5 rounded-full text-xs flex items-center justify-center p-0">
                3
              </Badge>
            </Button>

            {/* User Avatar */}
            <div className="flex items-center space-x-2">
              <Avatar className="w-8 h-8 shadow-soft">
                <AvatarImage src="/placeholder-avatar.jpg" alt={userName} />
                <AvatarFallback className="bg-gradient-primary text-white">
                  {userName.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className="hidden md:block text-sm font-medium">{userName}</span>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="space-y-2">
              {/* Role Switcher - Mobile */}
              <div className="flex items-center justify-between py-2">
                <Badge variant="secondary" className={`${currentRole.color} text-white`}>
                  {currentRole.icon}
                  <span className="ml-1">{currentRole.title}</span>
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const roles: ('student' | 'teacher' | 'admin')[] = ['student', 'teacher', 'admin'];
                    const currentIndex = roles.indexOf(userRole);
                    const nextRole = roles[(currentIndex + 1) % roles.length];
                    onRoleChange(nextRole);
                  }}
                >
                  Đổi vai trò
                </Button>
              </div>
              
              {/* Menu Items */}
              {currentRole.menuItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start space-x-2"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Button>
              ))}
              
              {/* Search - Mobile */}
              <Button variant="outline" className="w-full justify-start space-x-2">
                <Search className="w-4 h-4" />
                <span>Tìm kiếm</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};