import { FunctionComponent } from 'react';
import { EuiPageTemplate, EuiText } from '@elastic/eui';
import KibanaLayout from '../../layouts/kibana';

const Index: FunctionComponent = () => {
  return (
    <KibanaLayout>
      <EuiPageTemplate
        template="centeredBody"
        pageHeader={{
          iconType: 'logoKibana',
          pageTitle: 'Home',
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
        </EuiText>
      </EuiPageTemplate>
    </KibanaLayout>
  );
};

export default Index;
