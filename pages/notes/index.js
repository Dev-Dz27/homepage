import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'
import { getAllNodes } from 'next-mdx'
import NextLink from 'next/link'
import PageTransition from '@comp/page-transition'

function NotePage({ posts }) {
  return (
    <PageTransition>
      <Container maxW="2xl">
        <Text fontSize="2xl">Kendime notlar</Text>

        <Box mt={20}>
          {posts.length ? (
            posts.map((post) => (
              <article key={post.slug}>
                <NextLink href={post.url} passHref>
                  <a>{post.frontMatter.title}</a>
                </NextLink>
              </article>
            ))
          ) : (
            <p>No posts found.</p>
          )}
        </Box>
      </Container>
    </PageTransition>
  )
}

export async function getStaticProps() {
  const posts = await getAllNodes('post')

  return {
    props: {
      posts
    }
  }
}

export default NotePage