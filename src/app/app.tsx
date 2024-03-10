import {
  SplitLayout,
  SplitCol,
  View,
  PanelHeader,
  Panel,
} from '@vkontakte/vkui';
import { GroupsPage } from '@/pages/groups';
import { usePanel } from '@/shared/lib/hooks/usePanel';
import { EPanelRoutes } from '@/shared/model/types/routes.enum';
import { Modal } from './modal';

const App = () => {
  const { panel } = usePanel();

  return (
    <SplitLayout
      style={{ justifyContent: 'center' }}
      header={<PanelHeader delimiter='none' />}
      modal={<Modal />}
    >
      <SplitCol width='100%' stretchedOnMobile autoSpaced>
        <View activePanel={panel}>
          <Panel id={EPanelRoutes.GROUPS}>
            <GroupsPage />
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};

export default App;
