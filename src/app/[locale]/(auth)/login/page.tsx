import { Mail, CircleCheckBig } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { Link } from '@/i18n/navigation';

export default function LoginPage() {
  return (
    <div className="h-screen w-full relative">
      <Image
        className="-z-10"
        alt="background-image"
        src="/background-images/login-background.jpg"
        fill
      />
      <div className="container h-full">
        <div className="flex flex-col justify-center items-center h-full w-4/5 mx-auto">
          <div className="flex justify-between bg-white pt-22 pb-21 pe-22 ps-24 rounded-2xl w-full">
            <div className="flex flex-col">
              <Image
                alt="logo"
                src="/images/dp-logo.png"
                width={186}
                height={63}
              />
              <p className="font-36 font-semibold mt-24 mb-1">
                Sign in with your email
              </p>
              <p className="font-20">
                We suggest using the email address you use at work.
              </p>
              <Input
                startIcon={<Mail size={24} strokeWidth={1} />}
                endIcon={<CircleCheckBig size={24} strokeWidth={1} />}
                className="mt-18 mb-5"
                placeholder="Work Email"
              />
              <Button fullWidth>Continue with SSO</Button>
            </div>
            <div className="h-[629] w-[624] rounded-3xl overflow-hidden">
              <video
                src="/videos/login.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover max-w-none"
              />
            </div>
          </div>
          <p className="text-black-700 text-center mt-7">
            By using Department Performance Dashboard you agree to the{' '}
            <Link className="font-link" href="terms-of-service">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link className="font-link" href="privacy-policy">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
