interface IProps {
    color: string,
}

const MailIcon = ({ color }: IProps) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path d="M17.9606 3.33398C17.8849 3.32617 17.8085 3.32617 17.7328 3.33398H2.17726C2.07756 3.33551 1.97852 3.35046 1.88281 3.37842L9.91059 11.3729L17.9606 3.33398Z" fill={color} />
                <path d="M18.7834 4.10559L10.6945 12.1611C10.4863 12.3681 10.2047 12.4843 9.91115 12.4843C9.61761 12.4843 9.336 12.3681 9.12782 12.1611L1.11115 4.1667C1.08651 4.25728 1.07344 4.35062 1.07227 4.44448V15.5556C1.07227 15.8503 1.18933 16.1329 1.3977 16.3413C1.60608 16.5496 1.88869 16.6667 2.18338 16.6667H17.7389C18.0336 16.6667 18.3162 16.5496 18.5246 16.3413C18.733 16.1329 18.85 15.8503 18.85 15.5556V4.44448C18.8456 4.32873 18.8231 4.21439 18.7834 4.10559ZM2.94449 15.5556H2.17227V14.7611L6.21115 10.7556L6.99449 11.5389L2.94449 15.5556ZM17.7278 15.5556H16.95L12.9 11.5389L13.6834 10.7556L17.7223 14.7611L17.7278 15.5556Z" fill={color} />
            </g>
            <defs>
                <clipPath>
                    <rect width="20" height="20" fill={color} />
                </clipPath>
            </defs>
        </svg>
    )
}

export default MailIcon;