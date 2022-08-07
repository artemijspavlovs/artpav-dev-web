import {socialMedia} from "../../src/utils/constants/socialMedia";

const SocialMedia = () => {
    return (
        <>
            {
                socialMedia.map(m => {
                    return (
                        <div>
                            <a
                                target={"_blank"}
                                href={m.url}
                                rel={"noopener norefferer"}
                            >
                                {m.name}
                            </a>
                        </div>
                    )
                })
            }
        </>
    )
}

export default SocialMedia
