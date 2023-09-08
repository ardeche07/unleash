import {
    parseParameterNumber,
    parseParameterStrings,
} from 'utils/parseParameter';
import { Box } from '@mui/material';
import PercentageCircle from 'component/common/PercentageCircle/PercentageCircle';
import { PlaygroundParameterItem } from '../PlaygroundParameterItem/PlaygroundParameterItem';
import { StyledBoxSummary } from '../StrategyExecution.styles';
import { PlaygroundConstraintSchema, PlaygroundRequestSchema } from 'openapi';
import { Badge } from 'component/common/Badge/Badge';

export interface PlaygroundResultStrategyExecutionParametersProps {
    parameters: { [key: string]: string };
    constraints: PlaygroundConstraintSchema[];
    input?: PlaygroundRequestSchema;
}

export const PlaygroundResultStrategyExecutionParameters = ({
    parameters,
    constraints,
    input,
}: PlaygroundResultStrategyExecutionParametersProps) => {
    return (
        <>
            {Object.keys(parameters).map(key => {
                switch (key) {
                    case 'rollout':
                    case 'Rollout':
                        const percentage = parseParameterNumber(
                            parameters[key]
                        );
                        return (
                            <StyledBoxSummary
                                key={key}
                                sx={{ display: 'flex', alignItems: 'center' }}
                            >
                                <Box sx={{ mr: '1rem' }}>
                                    <PercentageCircle
                                        percentage={percentage}
                                        size="2rem"
                                    />
                                </Box>
                                <div>
                                    <Badge color="success">{percentage}%</Badge>{' '}
                                    of your base{' '}
                                    {constraints.length > 0
                                        ? 'who match constraints'
                                        : ''}{' '}
                                    is included.
                                </div>
                            </StyledBoxSummary>
                        );
                    case 'userIds':
                    case 'UserIds':
                        const users = parseParameterStrings(parameters[key]);
                        return (
                            <PlaygroundParameterItem
                                key={key}
                                value={users}
                                text="user"
                                input={
                                    Boolean(input?.context?.userId)
                                        ? input?.context?.userId
                                        : 'no value'
                                }
                                showReason={Boolean(
                                    input?.context?.userId &&
                                        !users.includes(input?.context?.userId)
                                )}
                            />
                        );
                    case 'hostNames':
                    case 'HostNames':
                        const hosts = parseParameterStrings(parameters[key]);
                        return (
                            <PlaygroundParameterItem
                                key={key}
                                value={hosts}
                                text={'host'}
                                input={'no value'}
                                showReason={undefined}
                            />
                        );
                    case 'IPs':
                        const IPs = parseParameterStrings(parameters[key]);
                        return (
                            <PlaygroundParameterItem
                                key={key}
                                value={IPs}
                                text={'IP'}
                                input={
                                    Boolean(input?.context?.remoteAddress)
                                        ? input?.context?.remoteAddress
                                        : 'no value'
                                }
                                showReason={Boolean(
                                    input?.context?.remoteAddress &&
                                        !IPs.includes(
                                            input?.context?.remoteAddress
                                        )
                                )}
                            />
                        );
                    case 'stickiness':
                    case 'groupId':
                        return null;
                    default:
                        return null;
                }
            })}
        </>
    );
};
