import { useState } from 'react';
import {
  Box,
  Toolbar,
  Typography,
  Breadcrumbs,
  Link as MuiLink,
  Table,
  TableBody,
  IconButton,
} from '@mui/material';
import {
  Info as InfoIcon,
  Edit as EditIcon,
  InfoOutlined as InfoOutlinedIcon,
  KeyboardArrowDown,
} from '@mui/icons-material';
import { PagesNav } from '../../../../styles/PagesNav.styled';
import { useNav } from '../../../../contexts/NavContextProvider';
import {
  PageContent,
  PageHeader,
  Container,
  InfoContainer,
  FormContainer,
  FormHeader,
  ActionButtonsContainer,
  FormTableRow,
  FormTableCell,
  FormHeaderText,
} from '../../../../styles/Requests.styled';

export const ViewITItSupply = () => {
  const [values, setValues] = useState({
    title: '',
    desc: '',
  });
  const { navOpen } = useNav();
  const [isEdit, setIsEdit] = useState(false);

  const handleInputChange = (field) => (event) => {
    setValues({
      ...values,
      [field]: event.target.value,
    });
  };

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (
    <>
      <PageContent>
        <PagesNav
          open={navOpen}
          position="fixed"
          sx={{
            backgroundColor: '#fff',

            color: '#424242',
            mt: '63px',
            borderTop: '2px solid #e0e0e0',
            borderBottom: '2px solid #e0e0e0',
            boxShadow: 'none',
          }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <div role="presentation" onClick={handleClick}>
              <Breadcrumbs aria-label="breadcrumb">
                <MuiLink
                  underline="hover"
                  color="inherit"
                  href="/"
                  sx={{
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row-reverse',
                  }}
                >
                  <KeyboardArrowDown sx={{ ml: 0.5 }} />
                  Sorğular
                </MuiLink>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  {' '}
                  Day off
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  {' '}
                  Sorğunun təsviri
                </Typography>
              </Breadcrumbs>
            </div>
          </Toolbar>
        </PagesNav>

        <PageHeader>
          <Toolbar>
            <Typography
              sx={{
                ml: '-10px',
                color: '#000',
              }}
            >
              Sorğunun formalaşdırılması
            </Typography>
            <Typography
              sx={{
                color: '#000',
                ml: '16px',
              }}
            >
              IT təchizat göndərməsi
            </Typography>
            <Typography
              sx={{
                color: '#9B5AE1',
                ml: '16px',
                position: 'relative',
                '&:after': {
                  content: '""',
                  display: 'block',
                  alignItems: 'center',
                  position: 'absolute',
                  top: '0',
                  left: '-13px',
                  height: '2px',
                  width: 122,
                  backgroundColor: '#9B5AE1',
                  mt: '30px',
                },
              }}
            >
              IT göndərməsi
            </Typography>
          </Toolbar>
        </PageHeader>

        <Container>
          <InfoContainer>
            <InfoIcon sx={{ m: '16px 10px 18px' }} />
            <Typography
              color="initial"
              sx={{
                fontSize: '1.05rem',
              }}
            >
              <Box
                component="span"
                sx={{
                  fontWeight: '700',
                }}
              >
                Sorğunu açan şəxs:
              </Box>{' '}
              Aydin Abbasov
            </Typography>
          </InfoContainer>

          <FormContainer>
            <FormHeader>
              <FormHeaderText>IT göndərməsi</FormHeaderText>

              <ActionButtonsContainer>
                <IconButton aria-label="" onClick={() => setIsEdit(!isEdit)}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="">
                  <InfoOutlinedIcon />
                </IconButton>
              </ActionButtonsContainer>
            </FormHeader>

            <Table sx={{ padding: '0 16px', borderCollapse: 'separate' }}>
              <TableBody>
                <FormTableRow>
                  <FormTableCell
                    component="th"
                    scope="row"
                    sx={{
                      width: '244px',
                      color: '#9E9E9E',
                    }}
                  >
                    <Typography>Qeyd</Typography>
                  </FormTableCell>
                  <FormTableCell
                    component="td"
                    scope="row"
                    sx={{ width: '537px', color: '#212121' }}
                  >
                    <Typography> Sadə bir qeyd</Typography>
                  </FormTableCell>
                </FormTableRow>

                <FormTableRow>
                  <FormTableCell
                    component="th"
                    scope="row"
                    sx={{
                      width: '244px',
                      color: '#9E9E9E',
                    }}
                  >
                    <Typography>Nəticə mətni</Typography>
                  </FormTableCell>
                  <FormTableCell
                    component="td"
                    scope="row"
                    sx={{ width: '537px', color: '#212121' }}
                  >
                    <Typography> Hər şey qaydasındadır</Typography>
                  </FormTableCell>
                </FormTableRow>

                <FormTableRow>
                  <FormTableCell
                    component="th"
                    scope="row"
                    sx={{ borderBottom: 'none', color: '#9E9E9E' }}
                  >
                    <Typography>Nəticə</Typography>
                  </FormTableCell>
                  <FormTableCell
                    component="td"
                    scope="row"
                    sx={{ borderBottom: 'none', color: '#212121' }}
                  >
                    <Typography>IT göndərməsi</Typography>
                  </FormTableCell>
                </FormTableRow>
              </TableBody>
            </Table>
          </FormContainer>
        </Container>
      </PageContent>
    </>
  );
};
