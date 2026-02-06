import React, { useEffect, useState } from 'react';
import { Check, AlertCircle, X } from 'lucide-react';

export type NotificationType = 'success' | 'error' | 'info';

export interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  duration?: number;
}

interface NotificationToastProps {
  notification: Notification;
  onClose: (id: string) => void;
}

export const NotificationToast: React.FC<NotificationToastProps> = ({ notification, onClose }) => {
  useEffect(() => {
    if (notification.duration !== 0) {
      const timer = setTimeout(() => {
        onClose(notification.id);
      }, notification.duration || 3000);
      return () => clearTimeout(timer);
    }
  }, [notification, onClose]);

  const bgColors = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800'
  };

  const icons = {
    success: <Check size={18} className="text-green-600" />,
    error: <AlertCircle size={18} className="text-red-600" />,
    info: <AlertCircle size={18} className="text-blue-600" />
  };

  return (
    <div className={`fixed bottom-4 right-4 flex items-center p-4 mb-4 text-sm border rounded-lg shadow-lg transition-all transform translate-y-0 opacity-100 ${bgColors[notification.type]} z-50`}>
      <div className="mr-3">{icons[notification.type]}</div>
      <div className="font-medium">{notification.message}</div>
      <button 
        onClick={() => onClose(notification.id)}
        className="ml-auto -mx-1.5 -my-1.5 p-1.5 rounded-lg focus:ring-2 focus:ring-gray-300 hover:bg-white hover:bg-opacity-20 inline-flex h-8 w-8"
      >
        <X size={16} />
      </button>
    </div>
  );
};
