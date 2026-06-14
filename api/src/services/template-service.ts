import { trackBackgroundJob } from '@template/observability';

export const createTemplateService = () => ({
  async getOverview() {
    trackBackgroundJob('dashboard_overview', 'started');
    trackBackgroundJob('dashboard_overview', 'completed');

    return {
      message: 'Template services are online.',
      checklist: [
        'RPC wired through tRPC',
        'Auth and SMTP ready for extension',
        'Redis, RabbitMQ, and Spaces abstractions in place',
      ],
    };
  },
});
