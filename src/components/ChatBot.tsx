import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  Send, 
  X, 
  Bot, 
  User,
  Sparkles,
  Minimize2,
  Maximize2
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  suggestions?: string[];
}

interface ChatBotProps {
  userRole: 'student' | 'teacher' | 'admin';
}

export const ChatBot = ({ userRole }: ChatBotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `Xin chào! Tôi là trợ lý AI EduPal. Tôi sẽ hỗ trợ bạn với vai trò ${userRole === 'student' ? 'học viên' : userRole === 'teacher' ? 'giáo viên' : 'quản trị viên'}. Bạn có thể hỏi tôi về bất kỳ điều gì!`,
      sender: 'bot',
      timestamp: new Date(),
      suggestions: getSuggestionsForRole(userRole)
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  function getSuggestionsForRole(role: 'student' | 'teacher' | 'admin'): string[] {
    switch (role) {
      case 'student':
        return [
          'Tạo lộ trình học cho tôi',
          'Giải thích khái niệm này',
          'Tôi cần ôn tập gì?',
          'Nhắc nhở deadline bài tập'
        ];
      case 'teacher':
        return [
          'Tạo bài kiểm tra mới',
          'Phân tích điểm số lớp',
          'Gợi ý phương pháp giảng dạy',
          'Tạo kế hoạch giảng dạy'
        ];
      case 'admin':
        return [
          'Báo cáo hệ thống',
          'Phân tích người dùng',
          'Kiểm tra hiệu suất',
          'Tạo báo cáo tài chính'
        ];
      default:
        return ['Hỗ trợ tổng quát'];
    }
  }

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(text, userRole),
        sender: 'bot',
        timestamp: new Date(),
        suggestions: getSuggestionsForRole(userRole)
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userMessage: string, role: string): string => {
    // Simple response generation based on role and message
    const responses = {
      student: [
        'Tôi hiểu bạn cần hỗ trợ học tập. Hãy để tôi giúp bạn tìm hiểu chi tiết về vấn đề này.',
        'Đây là một câu hỏi hay! Tôi sẽ tạo một lộ trình học tập phù hợp với bạn.',
        'Dựa trên tiến độ học tập của bạn, tôi khuyên bạn nên tập trung vào những điểm này.',
      ],
      teacher: [
        'Tôi có thể giúp bạn tạo bài kiểm tra với các câu hỏi phù hợp với mức độ học viên.',
        'Dựa trên dữ liệu lớp học, tôi thấy một số xu hướng thú vị mà bạn nên lưu ý.',
        'Tôi sẽ gợi ý một số phương pháp giảng dạy hiệu quả cho chủ đề này.',
      ],
      admin: [
        'Tôi sẽ tạo báo cáo chi tiết về hiệu suất hệ thống trong tuần qua.',
        'Dữ liệu cho thấy một số xu hướng tích cực trong việc sử dụng platform.',
        'Tôi khuyên bạn nên chú ý đến những chỉ số này để tối ưu hóa hệ thống.',
      ]
    };
    
    const roleResponses = responses[role as keyof typeof responses] || responses.student;
    return roleResponses[Math.floor(Math.random() * roleResponses.length)];
  };

  if (!isOpen) {
    return (
      <Button
        variant="chat"
        size="chat"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 animate-float shadow-glow"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <Card className={`fixed bottom-6 right-6 z-50 w-80 shadow-glow border-primary/20 transition-all duration-300 ${
      isMinimized ? 'h-14' : 'h-96'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-gradient-primary text-primary-foreground rounded-t-lg">
        <div className="flex items-center space-x-2">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-white/20 text-white">
              <Bot className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-sm">EduPal AI</h3>
            <p className="text-xs text-white/80">Trợ lý học tập thông minh</p>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMinimized(!isMinimized)}
            className="h-8 w-8 text-white hover:bg-white/20"
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 text-white hover:bg-white/20"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <ScrollArea className="flex-1 p-4 h-64">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-start space-x-2 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <Avatar className="w-6 h-6 flex-shrink-0">
                      <AvatarFallback className={msg.sender === 'user' ? 'bg-gradient-primary text-white' : 'bg-muted'}>
                        {msg.sender === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`rounded-lg p-3 ${
                      msg.sender === 'user' 
                        ? 'bg-gradient-primary text-white' 
                        : 'bg-muted text-foreground'
                    }`}>
                      <p className="text-sm">{msg.text}</p>
                      {msg.suggestions && (
                        <div className="mt-2 space-y-1">
                          {msg.suggestions.map((suggestion, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth mr-1 mb-1"
                              onClick={() => sendMessage(suggestion)}
                            >
                              <Sparkles className="w-3 h-3 mr-1" />
                              {suggestion}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback className="bg-muted">
                        <Bot className="w-3 h-3" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-muted rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage(message)}
                placeholder="Nhập tin nhắn..."
                className="flex-1"
              />
              <Button
                variant="default"
                size="icon"
                onClick={() => sendMessage(message)}
                disabled={!message.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </>
      )}
    </Card>
  );
};