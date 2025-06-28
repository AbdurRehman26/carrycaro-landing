import { MagicCard } from "@site/src/components/magicui/magic-card";
import {
    ChartPieIcon,
    ClockIcon,
    CogIcon,
    CpuIcon,
    DatabaseIcon,
    FlameIcon,
    Globe2Icon,
    GlobeIcon,
    KeyIcon,
    LockIcon,
    Package2Icon,
    ServerIcon,
    TerminalIcon, TruckIcon, User2Icon
} from "lucide-react";
import { ReactNode } from "react";

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: ReactNode }) {
    return (
        <MagicCard className="rounded-lg p-5" gradientColor="#89898940" gradientFrom="#00674F" gradientTo="#002120">
            <div>
                <div className="text-gray-500">{icon}</div>
                <h2 className="text-xl text-gray-700 dark:text-gray-200 mt-2">{title}</h2>
                <p className="text-gray-500 mb-0">{description}</p>
            </div>
        </MagicCard>
    );
}

export default function Features(): ReactNode {
    return (
        <div className="py-10">
            <h2 className="text-4xl text-center">Features</h2>
            <p className="text-lg text-center text-gray-700 dark:text-gray-400">Explore some of Carrycaro's features</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10">
                <FeatureCard
                    title="Travel Info"
                    description="View the traveller's information such as departure and arrival time, location, and more"
                    icon={<Globe2Icon color={'#00674F'} size={32} />}
                />
                <FeatureCard
                    title="Delivery Request"
                    description="View the delivery request details such as package size, weight, and more"
                    icon={<TruckIcon color={'#00674F'} size={32} />}
                />
                <FeatureCard
                    title="Exchange Personal Info"
                    description="Once approved, your personal information will be exchanged with the traveller"
                    icon={<User2Icon color={'#00674F'} size={32} />}
                />
            </div>
        </div>
    )
}