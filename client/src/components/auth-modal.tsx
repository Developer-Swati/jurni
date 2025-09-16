import { useState } from "react";
import { auth } from "@/lib/auth";
import { User } from "@/types/trip";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'login' | 'signup';
  onTypeChange: (type: 'login' | 'signup') => void;
  onSuccess: (user: User) => void;
}

export default function AuthModal({
  isOpen,
  onClose,
  type,
  onTypeChange,
  onSuccess
}: AuthModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      let user: User;
      if (type === 'login') {
        user = auth.login(formData.email, formData.password);
        toast({
          title: "Success",
          description: "Successfully signed in!",
        });
      } else {
        user = auth.signup(formData.name, formData.email, formData.password);
        toast({
          title: "Success",
          description: "Account created successfully!",
        });
      }
      
      onSuccess(user);
      setFormData({ name: '', email: '', password: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Authentication failed. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle data-testid="text-auth-title">
              {type === 'login' ? 'Sign In' : 'Create Account'}
            </DialogTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose}
              data-testid="button-close-auth"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {type === 'signup' && (
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                data-testid="input-name"
              />
            </div>
          )}
          
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              data-testid="input-email"
            />
          </div>
          
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder={type === 'login' ? 'Enter your password' : 'Create a password'}
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              required
              data-testid="input-password"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full"
            data-testid="button-submit-auth"
          >
            {type === 'login' ? 'Sign In' : 'Create Account'}
          </Button>
        </form>

        <div className="text-center">
          <span className="text-muted-foreground">
            {type === 'login' ? "Don't have an account? " : "Already have an account? "}
          </span>
          <Button
            variant="link"
            onClick={() => onTypeChange(type === 'login' ? 'signup' : 'login')}
            className="p-0 h-auto"
            data-testid="button-switch-auth"
          >
            {type === 'login' ? 'Sign Up' : 'Sign In'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
