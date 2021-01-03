import SiteConfig from '../site.config'
import { HStack, Link, IconButton } from '@chakra-ui/react'

function SocialButton({ href, children }) {
  return <IconButton as={Link} isExternal href={href} icon={children} />
}

function Social({
  twitter = false,
  youtube = false,
  github = false,
  instagram = false,
  superpeer = false,
  ...props
}) {
  return (
    <HStack {...props}>
      {twitter && (
        <SocialButton href={SiteConfig.social.twitter}>
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
          >
            <title>Twitter icon</title>
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </SocialButton>
      )}
      {youtube && (
        <SocialButton href={SiteConfig.social.youtube}>
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
          >
            <title>YouTube icon</title>
            <path d="M23.499 6.203a3.008 3.008 0 00-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 00-2.088 2.09A31.258 31.26 0 000 12.01a31.258 31.26 0 00.523 5.785 3.008 3.008 0 002.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 002.089-2.09 31.258 31.26 0 00.5-5.784 31.258 31.26 0 00-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z" />
          </svg>
        </SocialButton>
      )}
      {github && (
        <SocialButton href={SiteConfig.social.github}>
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
          >
            <title>GitHub icon</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </SocialButton>
      )}
      {instagram && (
        <SocialButton href={SiteConfig.social.instagram}>
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
          >
            <title>Instagram icon</title>
            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
          </svg>
        </SocialButton>
      )}
      {superpeer && (
        <SocialButton href={SiteConfig.social.superpeer}>
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 55"
            width={24}
            height={24}
          >
            <path
              d="M42.31 42.79c-5.004-1.098-9.305-2.02-9.305-2.02.746-.526 1.536-1.623 1.536-2.984 0-1.58-.834-2.502-1.492-2.984.878-.659 2.063-1.844 2.063-3.994 0-2.326-1.58-3.511-2.414-4.082.658-.614 1.58-1.843 1.58-3.555 0-3.028-2.326-4.389-4.214-5.135-1.536-.57-4.433-.79-6.978-.79-4.17 0-7.944.307-9.744.307-2.15 0-1.887-1.097-1.097-2.107.483-.57 6.584-8.602 7.725-10.05.79-1.054 1.711-2.063 2.414-1.668.746.395.439 2.238-.351 4.257-1.186 3.16-2.853 5.18-3.248 5.881l2.809 1.712c1.097-1.36 4.652-7.286 4.652-11.104 0-1.712-.658-3.16-1.931-3.95-1.273-.746-2.897-.702-4.345.176-.966.57-1.931 1.404-2.765 2.457-2.195 2.81-6.847 8.69-8.559 10.885-2.458 3.204-1.316 7.154 3.906 7.154 1.844 0 7.857-.439 10.183-.439 2.677 0 3.994.132 4.915.263 1.756.264 2.766 1.054 2.766 2.107 0 .746-.352 1.273-.966 1.712-.615.439-1.185 1.097-1.185 2.019 0 1.097 1.01 1.536 1.668 1.975.878.57 1.404.965 1.404 1.887 0 .834-.614 1.317-1.317 1.843-.57.44-1.316.922-1.316 1.931 0 .922.658 1.361 1.097 1.712.439.351.922.746.922 1.492s-.351 1.098-1.23 1.624c-.701.395-1.71 1.142-1.71 2.195 0 1.185.833 1.711 1.842 1.975 2.414.57 9.612 2.107 12.07 2.677.79.176 1.58.439 1.58 1.097 0 .659-1.053.966-2.545.966-5.18 0-19.575-1.053-28.046-3.994-5.75-1.931-8.91-5.486-8.91-9.743 0-3.687 2.458-6.979 5.136-8.866L6.496 23.17C2.633 25.848 0 30.105 0 34.582c0 5.18 3.072 10.446 11.543 13.299 8.997 3.028 22.647 3.95 29.011 3.95 4.345 0 6.452-1.8 6.452-4.52-.044-2.59-2.15-3.995-4.697-4.521z"
              fill="currentColor"
            />
          </svg>
        </SocialButton>
      )}
    </HStack>
  )
}

export default Social
