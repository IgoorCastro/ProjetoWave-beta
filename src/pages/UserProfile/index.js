import React from 'react';
import * as C from './styles';
import AnimateBackground from '../../components/AnimeteBackground';
import CarouselFaixas from '../../components/CarouselTracks';
import Spectograma from '../../components/Spectograma';
import ProfilePicture from '../../components/ProfilePicture';
import UserImg from '../../assets/profileTest1.jpg';
import InstaIcon from '../../assets/socialIcons/instagram.svg';
import TwitterIcon from '../../assets/socialIcons/twitter.svg';
import YoutubeIcon from '../../assets/socialIcons/youtube.svg';
import SpotifyIcon from '../../assets/socialIcons/spotify.svg';
import SoundcloudIcon from '../../assets/socialIcons/soundCloud.svg';
import LogoImg from '../../assets/waveTextWhite.svg';

const UserProfile = () => {
    const user = {
        id: 1,
        name: 'MELAD',
        contact: 'music.melad@gmail.com',
        about: 'Mlead is an eletroonic artist and producer from Edmonton, AB, Canada. ith having won several remix competitions and finding sucess through Rocket League, Melad is droping his debut EP in Spring/Summer 2002 on MrSuicideSheep’s record label Seeking Blue.',
        profilePicture: UserImg,
        facebookUrl: 'facebook.com',
        instagramUrl: 'instagram.com',
        twitterUrl: 'twitter.com',
        youtubeUrl: 'youtube.com',
        spotifyUrl: 'spotify.com',
        soundcloudUrl: 'soundcloud.com'
    };

    // Metodo para verificar quais as midias disponiveis do usuario
    const checkSocialMidia = () => {
        // Array para verificação das midias
        const socialMediaIcons = [
            { url: user.instagramUrl, icon: InstaIcon },
            { url: user.twitterUrl, icon: TwitterIcon },
            { url: user.youtubeUrl, icon: YoutubeIcon },
            { url: user.spotifyUrl, icon: SpotifyIcon },
            { url: user.soundcloudUrl, icon: SoundcloudIcon }
        ];

        // Lista de ícones válidos
        const validSocial = [];

        // For para navegar no array usando url e icon
        for (const { url, icon } of socialMediaIcons) {
            if (url !== '') validSocial.push(<C.SocialMidia key={url} src={icon} />);
        }

        return validSocial.length > 0 ? validSocial : null;
    }

    return (
        <C.Container>
            <AnimateBackground blur={false} />

            <C.HeaderContainer>
                <C.HeaderContent>
                    <C.HeaderLogo src={LogoImg} />
                </C.HeaderContent>
            </C.HeaderContainer>

            <C.MainContainer>
                <C.MainContent>
                    <C.UserDataContainer>
                        <ProfilePicture props={user.profilePicture} />
                        <C.UserSocialContent>
                            <C.UserName>{user.name}</C.UserName>
                            <C.SocialContainer>
                                {checkSocialMidia()}
                            </C.SocialContainer>
                        </C.UserSocialContent>

                        <C.UserAboutContent>
                            <C.Label>About me</C.Label>
                            <C.UserAboutSection>
                                <C.Label>{user.about}</C.Label>
                                <C.Label>{user.contact}</C.Label>
                            </C.UserAboutSection>

                        </C.UserAboutContent>
                    </C.UserDataContainer>

                </C.MainContent>
            </C.MainContainer>

            <C.CarouselContainer>
                <CarouselFaixas />
            </C.CarouselContainer>
        </C.Container>
    )
}

export default UserProfile;
