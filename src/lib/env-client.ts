type PublicEnv = {
    API_BASE_URL: string;
}

const MANAGEMENT_SERVER_URL: string = process.env.NEXT_PUBLIC_MANAGEMENT_SERVER_URL || 'https://my-server-management-817398435500.us-central1.run.app/api/v1';

export const publicEnv: PublicEnv = {
    API_BASE_URL: MANAGEMENT_SERVER_URL
}