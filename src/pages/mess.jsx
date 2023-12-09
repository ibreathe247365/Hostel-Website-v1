import {React, useState } from "react";
import QRCode from "react-qr-code";
import {
    Button,
    Typography,
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

export function Mess() {
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
            

            <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
                <Typography> Hello Menu ! </Typography>
                <div id="current-menu">
                    <table>
                        <thead>
                            <tr>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thursday</th>
                                <th>Friday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Meal 1</td>
                                <td>Meal 2</td>
                                <td>Meal 3</td>
                                <td>Meal 4</td>
                                <td>Meal 5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="bg-blue-gray-50/50">
                <Footer />
            </div>
        </>
    )
}

export default Mess;