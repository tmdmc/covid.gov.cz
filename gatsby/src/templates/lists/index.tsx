import React from 'react';
import { graphql } from 'gatsby';
import Container from '@/components/container';
import { IQuery, ISitePageContext } from '@graphql-types';
import Layout from '@/layouts/default-layout';
import { Guide } from '@/components/guide';
import DesktopTopContent from '@/components/desktop-top-content';
import { SEO as Seo } from 'gatsby-plugin-seo';
import { Helmet } from 'react-helmet';
import SchemaComp from '@/components/schema';
import { useTranslation } from '@/components/i18n';

interface IProps {
  data: IQuery;
  pageContext: ISitePageContext;
}

const Home: React.FC<IProps> = ({ data, pageContext }) => {
  const { t } = useTranslation();
  const { homepage } = data;
  const {
    situation_label,
    situation_text,
    measure_description,
    situation_description,
    meta_description,
    situation_link,
    measure_label,
    measure_link,
    measure_text,
    relationships,
  } = homepage;
  const { measure_items, situation_items } = relationships;

  return (
    <Layout
      pageContext={pageContext}
      hasTransparentHeader
      showSearchInHeader={false}
      showBackgroundImage
    >
      <Seo
        title={t('homepage_meta_title')}
        description={meta_description ?? 'CovidPortal'}
        pagePath="/"
        htmlLanguage={pageContext.langCode}
      />
      <SchemaComp
        langCode={pageContext.langCode}
        isBlogPost={false}
        title={t('homepage_meta_title')}
        description={meta_description}
        isHomePage
      />
      <Helmet title={t('homepage_meta_title')} />
      <DesktopTopContent />
      <Container className="pt-2">
        {situation_items?.length ? (
          <Guide
            items={situation_items}
            title={situation_label.processed}
            description={situation_text}
            buttonHref={t('slug_situations')}
            buttonText={situation_link?.title}
            variant="blue"
            itemDescriptions={situation_description}
          />
        ) : (
          ''
        )}

        {measure_items?.length ? (
          <Guide
            items={measure_items}
            title={measure_label.processed}
            description={measure_text}
            buttonHref={t('slug_measures')}
            buttonText={measure_link?.title}
            variant="white"
            itemDescriptions={measure_description}
          />
        ) : (
          ''
        )}
      </Container>
    </Layout>
  );
};
export default Home;

// fix: pls fix query
export const query = graphql`
  query IndexQuery($langCode: String!) {
    homepage(langcode: { eq: $langCode }) {
      langcode
      measure_description
      situation_description
      meta_description
      measure_link {
        uri
        title
      }
      moderation_state
      measure_label {
        processed
      }
      measure_text
      situation_label {
        processed
      }
      situation_link {
        uri
        title
      }
      situation_text
      relationships {
        measure_items {
          id
          title
          norm
          valid_from
          valid_to
          path {
            alias
          }
          relationships {
            region {
              name
            }
          }
        }
        situation_items {
          id
          name
          path {
            alias
          }
          relationships {
            icon {
              code
            }
          }
        }
      }
    }
  }
`;
