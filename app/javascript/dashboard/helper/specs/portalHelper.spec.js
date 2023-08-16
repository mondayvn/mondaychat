import { buildPortalArticleURL, buildPortalURL } from '../portalHelper';

describe('PortalHelper', () => {
  describe('buildPortalURL', () => {
    it('returns the correct url', () => {
      window.mondaychatConfig = {
        hostURL: 'https://app.monday.com.vn',
        helpCenterURL: 'https://help.monday.com.vn',
      };
      expect(buildPortalURL('handbook')).toEqual(
        'https://help.monday.com.vn/hc/handbook'
      );
      window.mondaychatConfig = {};
    });
  });

  describe('buildPortalArticleURL', () => {
    it('returns the correct url', () => {
      window.mondaychatConfig = {
        hostURL: 'https://app.monday.com.vn',
        helpCenterURL: 'https://help.monday.com.vn',
      };
      expect(
        buildPortalArticleURL('handbook', 'culture', 'fr', 'article-slug')
      ).toEqual('https://help.monday.com.vn/hc/handbook/articles/article-slug');
      window.mondaychatConfig = {};
    });
  });
});
