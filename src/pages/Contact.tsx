import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, X, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

interface NotificationType {
  message: string;
  type: 'success' | 'error';
}

interface ToastNotificationProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const ToastNotification: React.FC<ToastNotificationProps> = ({ message, type = 'success', onClose }) => {
  const isSuccess = type === 'success';
  
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      className="fixed top-16 right-16 z-50 min-w-[320px] max-w-md"
    >
      <div className={`flex items-center p-4 gap-3 rounded-lg shadow-lg backdrop-blur-sm border ${
        isSuccess 
          ? 'bg-green-500/10 dark:bg-green-500/20 border-green-500/20 dark:border-green-400/30' 
          : 'bg-red-500/10 dark:bg-red-500/20 border-red-500/20 dark:border-red-400/30'
      }`}>
        {isSuccess ? (
          <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-green-400 shrink-0" />
        ) : (
          <XCircle className="w-5 h-5 text-red-500 dark:text-red-400 shrink-0" />
        )}
        
        <p className={`text-sm font-medium flex-1 ${
          isSuccess 
            ? 'text-green-700 dark:text-green-300' 
            : 'text-red-700 dark:text-red-300'
        }`}>
          {message}
        </p>
        
        <button
          onClick={onClose}
          className={`shrink-0 rounded-lg p-1.5 transition-colors ${
            isSuccess 
              ? 'text-green-600 dark:text-green-400 hover:bg-green-500/10 dark:hover:bg-green-400/10' 
              : 'text-red-600 dark:text-red-400 hover:bg-red-500/10 dark:hover:bg-red-400/10'
          }`}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [notification, setNotification] = useState<NotificationType | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      if (result.status === 200) {
        setFormData({ name: '', email: '', message: '' });
        setNotification({ message: 'Message sent successfully!', type: 'success' });
      } else {
        setNotification({ message: 'Failed to send message. Please try again.', type: 'error' });
      }
    } catch (error) {
      setNotification({ message: 'An error occurred. Please try again.', type: 'error' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl mx-auto py-8">
      <AnimatePresence>
        {notification && (
          <ToastNotification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}
      </AnimatePresence>

      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">Get in Touch</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-gray-300"
            required
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-gray-300"
            required
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-gray-300"
            required
          />
        </motion.div>

        <motion.button
          type="submit"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
        >
          <span>Send Message</span>
          <Send size={20} />
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Contact;