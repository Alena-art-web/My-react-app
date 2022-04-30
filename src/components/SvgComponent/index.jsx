import React from 'react'
import './index.scss'
const SvgIcon = ({id}) => {
    switch (id) {
        case "summary":
            return (
                <svg width="24" height="25" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_3427)">
                        <path d="M11.0741 20.6553C9.19796 20.6553 7.39862 19.91 6.07197 18.5834C4.74531 17.2567 4 15.4574 4 13.5812C4 11.705 4.74531 9.90571 6.07197 8.57905C7.39862 7.25239 9.19796 6.50708 11.0741 6.50708H11.5435V13.1119H18.1483V13.5812C18.1483 15.4574 17.403 17.2567 16.0763 18.5834C14.7496 19.91 12.9503 20.6553 11.0741 20.6553ZM10.6048 7.46495C9.43505 7.5549 8.31563 7.9784 7.37926 8.68523C6.44289 9.39206 5.72884 10.3526 5.32179 11.4529C4.91474 12.5532 4.83175 13.7472 5.08266 14.8933C5.33358 16.0393 5.90787 17.0894 6.73745 17.919C7.56703 18.7485 8.6171 19.3228 9.76315 19.5738C10.9092 19.8247 12.1032 19.7417 13.2035 19.3346C14.3038 18.9276 15.2644 18.2135 15.9712 17.2772C16.678 16.3408 17.1015 15.2214 17.1915 14.0516H10.6048V7.46495Z" fill="#B6B4C6" />
                        <path d="M20 12.0835H12.5717V4.65527H13.0346C14.8819 4.65527 16.6536 5.38912 17.9599 6.69537C19.2661 8.00163 20 9.77329 20 11.6206V12.0835ZM13.4933 11.1587H19.0538C18.9416 9.72187 18.3202 8.37225 17.3014 7.35285C16.2826 6.33345 14.9333 5.71123 13.4965 5.59821L13.4933 11.1587Z" fill="#B6B4C6" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_3427">
                            <rect width="16" height="16" fill="white" transform="translate(4 4.65527)" />
                        </clipPath>
                    </defs>
                </svg>
            )
        case "hours":
            return (
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5157 7.13953C16.8012 6.37266 15.9395 5.75758 14.982 5.33098C14.0246 4.90437 12.991 4.67498 11.943 4.65649C10.895 4.638 9.85396 4.83078 8.88207 5.22335C7.91017 5.61591 7.0273 6.20022 6.28612 6.94139C5.54494 7.68257 4.96064 8.56544 4.56808 9.53734C4.17551 10.5092 3.98272 11.5502 4.00121 12.5983C4.01971 13.6463 4.2491 14.6799 4.6757 15.6373C5.10231 16.5947 5.71739 17.4564 6.48425 18.171C7.19882 18.9379 8.06053 19.553 9.01798 19.9796C9.97542 20.4062 11.009 20.6356 12.057 20.6541C13.105 20.6726 14.146 20.4798 15.1179 20.0872C16.0898 19.6946 16.9727 19.1103 17.7139 18.3692C18.4551 17.628 19.0394 16.7451 19.4319 15.7732C19.8245 14.8013 20.0173 13.7603 19.9988 12.7123C19.9803 11.6643 19.7509 10.6307 19.3243 9.67325C18.8977 8.71581 18.2826 7.8541 17.5157 7.13953V7.13953ZM12 19.5052C10.6452 19.5052 9.32085 19.1035 8.19438 18.3508C7.06792 17.5981 6.18994 16.5283 5.67149 15.2766C5.15303 14.025 5.01738 12.6477 5.28169 11.3189C5.54599 9.99016 6.19839 8.76962 7.15637 7.81164C8.11435 6.85366 9.33489 6.20127 10.6636 5.93696C11.9924 5.67265 13.3697 5.80831 14.6214 6.32676C15.873 6.84522 16.9428 7.72319 17.6955 8.84965C18.4482 9.97612 18.8499 11.3005 18.8499 12.6553C18.848 14.4714 18.1257 16.2126 16.8415 17.4968C15.5573 18.781 13.8161 19.5033 12 19.5052V19.5052Z" fill="#B6B4C6" />
                    <path d="M11.9998 7.0968C10.9005 7.0968 9.82581 7.4228 8.91173 8.03356C7.99766 8.64433 7.28522 9.51244 6.86452 10.5281C6.44381 11.5438 6.33374 12.6614 6.54821 13.7396C6.76269 14.8178 7.29207 15.8083 8.06943 16.5856C8.84679 17.363 9.8372 17.8924 10.9154 18.1068C11.9937 18.3213 13.1113 18.2112 14.1269 17.7905C15.1426 17.3698 16.0107 16.6574 16.6215 15.7433C17.2322 14.8292 17.5582 13.7546 17.5582 12.6552C17.5566 11.1815 16.9704 9.7687 15.9284 8.72665C14.8863 7.6846 13.4735 7.09845 11.9998 7.0968ZM15.5996 15.6129L14.9752 14.9885L14.3383 15.6254L14.9627 16.2498C14.2495 16.839 13.3764 17.2014 12.4557 17.2905V16.4111H11.5544V17.2957C10.6336 17.2067 9.76049 16.8443 9.04734 16.255L9.67176 15.6306L9.03485 14.9937L8.41042 15.6181C7.82117 14.905 7.45873 14.0318 7.36972 13.111H8.24912V12.2098H7.36972C7.45873 11.289 7.82117 10.4159 8.41042 9.70273L9.03485 10.3272L9.67176 9.69024L9.04734 9.06582C9.76049 8.47657 10.6336 8.11413 11.5544 8.02511V8.90451H12.4557V8.02511C13.3765 8.11413 14.2496 8.47657 14.9627 9.06582L14.3383 9.69024L14.9752 10.3272L15.5996 9.70273C16.1889 10.4159 16.5513 11.289 16.6403 12.2098H12.7897C12.7104 12.073 12.5967 11.9592 12.4598 11.8799V9.80264H11.5586V11.8768C11.4389 11.9459 11.3366 12.0416 11.2599 12.1566C11.1831 12.2715 11.1337 12.4026 11.1157 12.5396C11.0977 12.6767 11.1114 12.8161 11.1558 12.947C11.2003 13.0779 11.2742 13.1968 11.372 13.2945C11.4697 13.3923 11.5886 13.4662 11.7195 13.5107C11.8504 13.5551 11.9898 13.5688 12.1269 13.5508C12.2639 13.5328 12.395 13.4834 12.5099 13.4066C12.6249 13.3298 12.7206 13.2276 12.7897 13.1079H16.6403C16.5509 14.028 16.1885 14.9003 15.5996 15.6129Z" fill="#B6B4C6" />
                </svg>
            )
        case "pencil":
            return (
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.4104 0.655273L2.02824 11.0402L0 16.6553L5.61788 14.6308L16 4.24586L12.4104 0.655273ZM14.6748 4.24586L12.7708 6.1508L10.5064 3.88539L12.4113 1.98045L14.6748 4.24586ZM4.55906 12.7616L11.3073 6.01245L12.1082 6.81433L5.36471 13.5626L4.55906 12.7616ZM3.09553 11.2972L9.84376 4.54798L10.6447 5.34986L3.89647 12.099L3.09553 11.2972ZM2.62494 12.1499L4.50729 14.0322L1.55859 15.0976L2.62494 12.1499Z" fill="#B6B4C6" />
                </svg>
            )
        case "timeReports":
            return (
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0582 4.65527H6V20.6553H18V8.67955L14.0582 4.65527ZM14.3275 6.2556L16.4315 8.40464H14.3275V6.2556ZM6.91838 19.7171V5.59234H13.4081V9.34608H17.0816V19.7204L6.91838 19.7171Z" fill="#B6B4C6" />
                    <path d="M8.23349 12.1921H15.7668V13.1183H8.23349V12.1921Z" fill="#B6B4C6" />
                    <path d="M8.23105 14.0989H15.7643V15.025H8.23105V14.0989Z" fill="#B6B4C6" />
                    <path d="M8.23105 15.9752H15.7643V16.9014H8.23105V15.9752Z" fill="#B6B4C6" />
                </svg>
            )
        case "confirmation":
            return (
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5358 10.1173C15.6529 10.2345 15.7186 10.3934 15.7186 10.559C15.7186 10.7247 15.6529 10.8835 15.5358 11.0007L11.3382 15.1943C11.221 15.3113 11.0621 15.3771 10.8965 15.3771C10.7308 15.3771 10.5719 15.3113 10.4547 15.1943L8.45909 13.1976C8.35119 13.0787 8.29321 12.9228 8.29716 12.7622C8.30111 12.6017 8.36669 12.4489 8.4803 12.3354C8.59391 12.2219 8.74684 12.1565 8.90737 12.1527C9.0679 12.149 9.22372 12.2071 9.34253 12.3152L10.897 13.8686L14.6473 10.1173C14.7054 10.0586 14.7746 10.0119 14.8508 9.98011C14.9271 9.94829 15.0089 9.93191 15.0915 9.93191C15.1742 9.93191 15.256 9.94829 15.3322 9.98011C15.4085 10.0119 15.4777 10.0586 15.5358 10.1173ZM20 12.6563C19.9998 14.2383 19.5306 15.7847 18.6516 17.1C17.7727 18.4154 16.5235 19.4406 15.0619 20.0461C13.6004 20.6516 11.9922 20.8102 10.4405 20.5018C8.88889 20.1934 7.46351 19.4319 6.34459 18.3136C5.22567 17.1952 4.46345 15.7702 4.15427 14.2187C3.84509 12.6673 4.00285 11.0589 4.6076 9.59711C5.21235 8.13527 6.23693 6.88555 7.55183 6.00593C8.86673 5.12631 10.4129 4.65628 11.9949 4.65528C13.0457 4.6546 14.0863 4.86106 15.0573 5.26285C16.0283 5.66464 16.9105 6.25387 17.6536 6.99686C18.3967 7.73985 18.986 8.62202 19.3879 9.59294C19.7899 10.5638 19.9965 11.6045 19.9959 12.6553L20 12.6563ZM18.7499 12.6563C18.7499 11.3213 18.354 10.0163 17.6123 8.90625C16.8707 7.79623 15.8165 6.93108 14.5831 6.4202C13.3497 5.90931 11.9925 5.77564 10.6832 6.03609C9.37381 6.29654 8.17109 6.9394 7.2271 7.88339C6.28311 8.82738 5.64024 10.0301 5.3798 11.3395C5.11935 12.6488 5.25302 14.006 5.7639 15.2394C6.27479 16.4728 7.13994 17.5269 8.24996 18.2686C9.35997 19.0103 10.665 19.4062 12 19.4062C12.8863 19.4061 13.7638 19.2313 14.5825 18.8919C15.4012 18.5526 16.1451 18.0552 16.7715 17.4283C17.398 16.8014 17.8948 16.0572 18.2335 15.2382C18.5723 14.4192 18.7464 13.5415 18.7458 12.6553L18.7499 12.6563Z" fill="#B6B4C6" />
                </svg>
            )
        case "mailer":
            return (
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6.65527V18.6553H20V6.65527H4ZM14.1566 11.7322C13.8777 12.0086 13.5428 12.2286 13.1721 12.3789C12.8014 12.5291 12.4025 12.6066 11.9995 12.6066C11.5965 12.6066 11.1976 12.5291 10.8269 12.3789C10.4562 12.2286 10.1214 12.0086 9.84247 11.7322L5.59932 7.57835H18.3997L14.1566 11.7322ZM8.88249 12.0903L4.93763 16.8904V8.22358L8.88249 12.0903ZM9.57041 12.718C10.2607 13.2403 11.1171 13.5247 11.9995 13.5247C12.882 13.5247 13.7383 13.2403 14.4286 12.718L18.5513 17.7387H5.44774L9.57041 12.718ZM15.1165 12.0903L19.0614 8.22451V16.894L15.1165 12.0903Z" fill="#B6B4C6" />
                </svg>
            )
        case "compare":
            return (
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_3481)">
                        <path d="M19.5307 17.6605H19.0307V7.15226C19.03 7.0863 19.0174 7.02113 18.9935 6.96046C18.9696 6.89979 18.935 6.84482 18.8914 6.79867C18.8479 6.75252 18.7965 6.7161 18.74 6.6915C18.6835 6.6669 18.6231 6.65461 18.5622 6.6553H16.6875C16.6266 6.65461 16.5662 6.6669 16.5097 6.6915C16.4532 6.7161 16.4018 6.75252 16.3583 6.79867C16.3148 6.84482 16.2801 6.89979 16.2562 6.96046C16.2323 7.02113 16.2197 7.0863 16.2191 7.15226V17.6605H15.2813V10.1358C15.2807 10.0699 15.2681 10.0047 15.2442 9.94401C15.2203 9.88333 15.1856 9.82835 15.1421 9.7822C15.0986 9.73605 15.0471 9.69965 14.9906 9.67505C14.9341 9.65045 14.8737 9.63814 14.8128 9.63883H12.9374C12.8765 9.63814 12.8161 9.65045 12.7596 9.67505C12.7031 9.69965 12.6516 9.73605 12.6081 9.7822C12.5646 9.82835 12.5299 9.88333 12.506 9.94401C12.4821 10.0047 12.4695 10.0699 12.4689 10.1358V17.6605H11.5311V14.1133C11.5305 14.0473 11.5179 13.9821 11.494 13.9215C11.4701 13.8608 11.4354 13.8058 11.3919 13.7597C11.3484 13.7135 11.297 13.6771 11.2405 13.6525C11.184 13.6279 11.1236 13.6156 11.0627 13.6163H9.18719C9.12631 13.6156 9.0659 13.6279 9.0094 13.6525C8.95291 13.6771 8.90144 13.7135 8.85794 13.7597C8.81444 13.8058 8.77976 13.8608 8.75587 13.9215C8.73198 13.9821 8.71936 14.0473 8.71873 14.1133V17.6605H7.78098V12.1289C7.78035 12.063 7.76772 11.9978 7.74384 11.9371C7.71995 11.8765 7.68527 11.8215 7.64176 11.7753C7.59826 11.7292 7.5468 11.6928 7.4903 11.6682C7.43381 11.6436 7.3734 11.6313 7.31251 11.632H5.43784C5.37696 11.6313 5.31654 11.6436 5.26005 11.6682C5.20356 11.6928 5.15209 11.7292 5.10859 11.7753C5.06509 11.8215 5.0304 11.8765 5.00651 11.9371C4.98263 11.9978 4.97001 12.063 4.96937 12.1289V17.6605H4.46848C4.34671 17.6605 4.22993 17.7129 4.14382 17.8062C4.05771 17.8995 4.00934 18.026 4.00934 18.1579C4.00934 18.2898 4.05771 18.4163 4.14382 18.5096C4.22993 18.6029 4.34671 18.6553 4.46848 18.6553H19.5307C19.6525 18.6553 19.7693 18.6029 19.8554 18.5096C19.9415 18.4163 19.9899 18.2898 19.9899 18.1579C19.9899 18.026 19.9415 17.8995 19.8554 17.8062C19.7693 17.7129 19.6525 17.6605 19.5307 17.6605ZM17.156 7.65099H18.0937V17.6605H17.156V7.65099ZM13.4058 10.6363H14.3436V17.6605H13.4058V10.6363ZM9.65566 14.6137H10.5934V17.6631H9.65647L9.65566 14.6137ZM5.9063 12.6259H6.84405V17.664H5.9063V12.6259Z" fill="#B6B4C6" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_3481">
                            <rect width="16" height="12" fill="white" transform="translate(4 6.65527)" />
                        </clipPath>
                    </defs>
                </svg>
            )
        default:
            return (
                <svg ></svg>
            )
            
    }   
}

export default SvgIcon
