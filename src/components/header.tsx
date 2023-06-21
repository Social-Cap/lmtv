import { useState } from 'react';
import { createStyles, Image, Header, Group, ActionIcon, Container, Burger, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.fn.variant({ variant: 'filled', color: 'dark' }).background,
    borderBottom: 0,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: rem(56),

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    width: rem(260),

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  social: {
    width: rem(260),

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: 'rgba(255, 255, 255, .4)',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, .45) !important',
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));



interface HeaderMiddleProps {
  links: { link: string; label: string }[];
}

export default function HeaderMiddle({ links }: HeaderMiddleProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, classes.secondaryControl )}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      Contact Us
    </a>
  ));

  return (
    <Header className={classes.header} height={56} mb={0}>
      <Container className={classes.inner}>
        <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>

        <Image maw={85} src={'https://i.ibb.co/SwPtwTD/Social-Capital-INC-removebg-preview.png'} />

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size="1.1rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
}