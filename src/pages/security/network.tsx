import { FunctionComponent } from 'react';
import Link from 'next/link';
import { EuiLink, EuiPageTemplate, EuiText } from '@elastic/eui';
import KibanaLayout from '../../layouts/kibana';

const Discover: FunctionComponent = () => {
  return (
    <KibanaLayout>
      <EuiPageTemplate
        template="centeredBody"
        pageHeader={{
          iconType: 'logoSecurity',
          pageTitle: 'Network',
          description: 'Lorem ipsum',
        }}>
        <EuiText>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
            erat sed arcu imperdiet eleifend eu vel ante. Nam dapibus lacus id
            efficitur luctus. Nunc vitae viverra erat, at euismod metus. Nam nec
            nulla ornare, aliquam arcu in, luctus diam. Phasellus convallis
            lorem fringilla, dapibus lectus in, pretium dui. Pellentesque massa
            nulla, tempus ut elit at, scelerisque commodo eros. Proin interdum
            libero aliquam, volutpat justo ut, posuere nulla.
          </p>
          <Link href="/kibana/" passHref>
            <EuiLink color="primary">Go to Kibana home</EuiLink>
          </Link>
        </EuiText>
      </EuiPageTemplate>
    </KibanaLayout>
  );
};

export default Discover;
