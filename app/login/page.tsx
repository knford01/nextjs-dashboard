import Image from 'next/image';
import LoginForm from '@/app/ui/forms/login-form';
import { Metadata } from 'next';
import '@/app/ui/css/background.css';

export const metadata: Metadata = {
    title: 'Login',
};

export default function LoginPage() {
    const repeatedListItems = Array.from({ length: 50 }, (_, index) => <li key={index}></li>);

    return (
        <>
            <ul className="background">
                {repeatedListItems}
            </ul>

            <main className="flex items-center justify-center md:h-screen">

                <div className="relative bg-gray-50 rounded-lg mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-1 md:-mt-32">
                    <div className="relative flex h-20 w-full items-end bg-[#26394e] rounded-lg md:h-40">
                        <Image
                            // src="/images/logos/ar_source_blue.jpg"
                            // src="/images/logos/AR-Source3.png"
                            // src="/images/logos/ars_new2.png"
                            src="/images/logos/ars_transparent.png"
                            alt="AR-Source Software Logo"
                            layout="fill"
                            objectFit="contain" // Ensures the image maintains aspect ratio and fits within the element bounds
                            className="object-contain"
                        />
                    </div>

                    <LoginForm />
                </div>



            </main>
        </>
    );
} 