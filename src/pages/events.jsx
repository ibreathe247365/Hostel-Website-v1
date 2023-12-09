import {React, useState } from "react";
import QRCode from "react-qr-code";
import {
    Button,
    Typography,
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

export function Events() {
    const [showQRCode, setShowQRCode] = useState(false);

    const toggleQRCode = () => {
        setShowQRCode(!showQRCode);
    };

    return (
        <>  
            <div className="absolute inset-0 z-0 h-[10vh] w-full bg-black/80" />

            <div className="flex mx-auto p-40 justify-center items-center">
                <Button onClick={toggleQRCode}>
                    Show QR
                </Button>
                {showQRCode && <QRCode value="https://www.example.com" />}
            </div>

            <div className="bg-blue-gray-50/50">
                <Footer />
            </div>
        </>
    )
}

export default Events;