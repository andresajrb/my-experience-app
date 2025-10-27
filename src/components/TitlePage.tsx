type TitlePageProps = {
    title: string;
    subtitle: string;
}

const TitlePage = ({ title, subtitle }: TitlePageProps) => {
    return (
        <>
            <p className="text-6xl font-bold mb-4">{title}</p>
            <p className="text-xl mb-4 text-gray-600 dark:text-gray-400">{subtitle}</p>
        </>
    )
}

export default TitlePage;