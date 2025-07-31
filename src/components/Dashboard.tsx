import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  BookOpen, 
  Users, 
  TrendingUp, 
  Clock, 
  Star,
  Play,
  FileText,
  Award,
  Brain,
  Calendar,
  Target,
  ChevronRight,
  Plus
} from 'lucide-react';

interface DashboardProps {
  userRole: 'student' | 'teacher' | 'admin';
  userName: string;
}

export const Dashboard = ({ userRole, userName }: DashboardProps) => {
  const renderStudentDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-hero text-white rounded-xl p-6 shadow-glow">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Chào mừng trở lại, {userName}!</h1>
            <p className="text-white/90">Hôm nay bạn muốn học gì? Cùng tiếp tục hành trình học tập nhé!</p>
          </div>
          <div className="hidden md:block">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <Brain className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-soft hover:shadow-card transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Khóa học đang học</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-2xl font-bold">5</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft hover:shadow-card transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Hoàn thành</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-accent" />
              <span className="text-2xl font-bold">85%</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft hover:shadow-card transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Điểm trung bình</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-secondary" />
              <span className="text-2xl font-bold">8.7</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft hover:shadow-card transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Ngày liên tiếp</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-2xl font-bold">12</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Courses */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card hover:shadow-glow transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Khóa học hiện tại
              <Button variant="ghost" size="sm">
                Xem tất cả <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: 'React.js Cơ bản', progress: 75, instructor: 'Nguyễn Văn A', time: '2h 30p' },
              { name: 'JavaScript Advanced', progress: 45, instructor: 'Trần Thị B', time: '1h 15p' },
              { name: 'Node.js Backend', progress: 30, instructor: 'Lê Văn C', time: '45p' }
            ].map((course, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted transition-smooth">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">{course.name}</h4>
                  <p className="text-sm text-muted-foreground">Giảng viên: {course.instructor}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Progress value={course.progress} className="flex-1 h-2" />
                    <span className="text-xs text-muted-foreground">{course.progress}%</span>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="mb-1">{course.time}</Badge>
                  <Button variant="default" size="sm" className="w-full">
                    <Play className="w-3 h-3 mr-1" />
                    Tiếp tục
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Assignments */}
        <Card className="shadow-card hover:shadow-glow transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Bài tập sắp tới
              <Button variant="ghost" size="sm">
                Xem tất cả <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { title: 'Bài tập React Components', subject: 'React.js Cơ bản', due: '2 ngày', urgent: true },
              { title: 'Project cuối khóa', subject: 'JavaScript Advanced', due: '1 tuần', urgent: false },
              { title: 'Quiz API Design', subject: 'Node.js Backend', due: '3 ngày', urgent: false }
            ].map((assignment, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-smooth">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${assignment.urgent ? 'bg-destructive' : 'bg-accent'}`} />
                  <div>
                    <h4 className="font-medium">{assignment.title}</h4>
                    <p className="text-sm text-muted-foreground">{assignment.subject}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant={assignment.urgent ? "destructive" : "secondary"}>
                    <Clock className="w-3 h-3 mr-1" />
                    {assignment.due}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderTeacherDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-secondary text-white rounded-xl p-6 shadow-glow">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Chào {userName}!</h1>
            <p className="text-white/90">Hôm nay bạn có 3 lớp học và 12 bài tập cần chấm điểm.</p>
          </div>
          <Button variant="hero" className="hidden md:flex">
            <Plus className="w-4 h-4 mr-2" />
            Tạo khóa học mới
          </Button>
        </div>
      </div>

      {/* Teacher Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-soft hover:shadow-card transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Tổng học viên</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-2xl font-bold">157</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft hover:shadow-card transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Khóa học đang dạy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-secondary" />
              <span className="text-2xl font-bold">8</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft hover:shadow-card transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Bài tập chờ chấm</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-accent" />
              <span className="text-2xl font-bold">23</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft hover:shadow-card transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Đánh giá TB</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-2xl font-bold">4.8</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Classes and Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Lớp học hôm nay</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: 'React.js Cơ bản - Lớp A1', time: '9:00 - 11:00', students: 25, status: 'active' },
              { name: 'JavaScript Advanced - Lớp B2', time: '14:00 - 16:00', students: 30, status: 'upcoming' },
              { name: 'Node.js Backend - Lớp C3', time: '19:00 - 21:00', students: 20, status: 'upcoming' }
            ].map((class_, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-smooth">
                <div>
                  <h4 className="font-semibold">{class_.name}</h4>
                  <p className="text-sm text-muted-foreground">{class_.time} • {class_.students} học viên</p>
                </div>
                <Badge variant={class_.status === 'active' ? 'default' : 'secondary'}>
                  {class_.status === 'active' ? 'Đang diễn ra' : 'Sắp tới'}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Hiệu suất học viên</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Tỷ lệ hoàn thành bài tập</span>
                <span className="font-semibold">89%</span>
              </div>
              <Progress value={89} className="h-2" />
              
              <div className="flex justify-between items-center">
                <span className="text-sm">Điểm trung bình</span>
                <span className="font-semibold">8.5/10</span>
              </div>
              <Progress value={85} className="h-2" />
              
              <div className="flex justify-between items-center">
                <span className="text-sm">Tỷ lệ tham gia lớp</span>
                <span className="font-semibold">94%</span>
              </div>
              <Progress value={94} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderAdminDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-accent text-accent-foreground rounded-xl p-6 shadow-glow">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Dashboard Quản trị</h1>
            <p className="text-accent-foreground/80">Tổng quan hệ thống EduPal AI</p>
          </div>
          <div className="hidden md:block">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <TrendingUp className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>

      {/* System Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-soft hover:shadow-card transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Tổng người dùng</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-2xl font-bold">2,847</span>
            </div>
            <p className="text-xs text-accent mt-1">+12% so với tháng trước</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft hover:shadow-card transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Khóa học hoạt động</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-secondary" />
              <span className="text-2xl font-bold">94</span>
            </div>
            <p className="text-xs text-accent mt-1">+5 khóa học mới</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft hover:shadow-card transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Doanh thu tháng</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              <span className="text-2xl font-bold">89M</span>
            </div>
            <p className="text-xs text-accent mt-1">+18% tăng trưởng</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft hover:shadow-card transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Uptime hệ thống</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-2xl font-bold">99.8%</span>
            </div>
            <p className="text-xs text-accent mt-1">Hoạt động ổn định</p>
          </CardContent>
        </Card>
      </div>

      {/* System Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Hoạt động gần đây</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { action: 'Người dùng mới đăng ký', user: 'Nguyễn Văn D', time: '2 phút trước', type: 'user' },
              { action: 'Khóa học được tạo', user: 'Giáo viên A', time: '15 phút trước', type: 'course' },
              { action: 'Thanh toán hoàn tất', user: 'Học viên B', time: '30 phút trước', type: 'payment' },
              { action: 'Cập nhật hệ thống', user: 'System', time: '2 giờ trước', type: 'system' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-smooth">
                <div className={`w-3 h-3 rounded-full ${
                  activity.type === 'user' ? 'bg-primary' : 
                  activity.type === 'course' ? 'bg-secondary' :
                  activity.type === 'payment' ? 'bg-accent' : 'bg-muted-foreground'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.user} • {activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Hiệu suất hệ thống</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">CPU Usage</span>
                <span className="font-semibold">45%</span>
              </div>
              <Progress value={45} className="h-2" />
              
              <div className="flex justify-between items-center">
                <span className="text-sm">Memory Usage</span>
                <span className="font-semibold">67%</span>
              </div>
              <Progress value={67} className="h-2" />
              
              <div className="flex justify-between items-center">
                <span className="text-sm">Storage Usage</span>
                <span className="font-semibold">32%</span>
              </div>
              <Progress value={32} className="h-2" />
              
              <div className="flex justify-between items-center">
                <span className="text-sm">Network I/O</span>
                <span className="font-semibold">89%</span>
              </div>
              <Progress value={89} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      {userRole === 'student' && renderStudentDashboard()}
      {userRole === 'teacher' && renderTeacherDashboard()}
      {userRole === 'admin' && renderAdminDashboard()}
    </div>
  );
};